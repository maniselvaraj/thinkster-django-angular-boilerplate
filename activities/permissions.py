__author__ = 'mani'


from rest_framework import permissions

class IsAuthorOfPost(permissions.BasePermission):
    def has_object_permission(self, request, view, activity):
        if request.user:
            return activity.author == request.user
        return False