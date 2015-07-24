from django.shortcuts import render

import json
from django.contrib.auth import authenticate, login
# Create your views here.

from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response
from authentication.models import Account
from authentication.permissions import IsAccountOwner
from authentication.serializers import AccountSerializer

#Django REST Framework offers a feature called viewsets.
# A viewset, as the name implies, is a set of views.
# Specifically, the ModelViewSet offers an interface for listing,
#  creating, retrieving, updating and destroying objects of a given model.
class AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad Request',
            'message': 'Account could not be create with received data'
        }, status=status.HTTP_400_BAD_REQUEST)



#viewset or login
class LoginView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)

        email = data.get('email', None)
        password = data.get('password', None)

        #calling django's authenticate
        account = authenticate(email=email, password=password)
        if account is not None:
            if account.is_active:
                login(request, account)
                serialized = AccountSerializer(account)
                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'Username/password combination invalid'
                },status=status.HTTP_401_UNAUTHORIZED)