from django.shortcuts import render

from rest_framework import permissions, viewsets
from rest_framework.response import Response

from activities.models import Activity

from activities.permissions import IsAuthorOfPost
from activities.serializers import ActivitySerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.order_by('-created_at')
    serializer_class = ActivitySerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsAuthorOfPost(),)


    def perform_create(self, serializer):
        instance = serializer.save(author=self.request.user)
        return super(ActivityViewSet, self).perform_create(serializer)


class AccountActivitiesViewSet(viewsets.ViewSet):
    queryset = Activity.objects.select_related('author').all()
    serializer_class = ActivitySerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

# Create your views here.
