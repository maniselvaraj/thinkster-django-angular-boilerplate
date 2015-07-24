
from django.conf.urls import patterns, url, include

from rest_framework_nested import routers

from thinkster_django_angular_boilerplate.views import IndexView
from authentication.views import AccountViewSet, LoginView, LogoutView
from activities.views import ActivityViewSet, AccountActivitiesViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'activities', ActivityViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)

accounts_router.register(r'activities', AccountActivitiesViewSet)


urlpatterns = patterns(
    '',

    #URLs registered with the router
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url('^.*$', IndexView.as_view(), name='index'),
)
