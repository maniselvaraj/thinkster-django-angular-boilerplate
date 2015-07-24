__author__ = 'mani'


from rest_framework import serializers

from authentication.serializers import AccountSerializer
from activities.models import Activity

class ActivitySerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Activity

        fields = ('id', 'author', 'content', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ActivitySerializer, self).get_validation_exclusions()
        return exclusions + ['author']

