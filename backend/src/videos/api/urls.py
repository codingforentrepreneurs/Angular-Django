from django.conf.urls import url

from .views import VideoList, VideoDetail

urlpatterns = [
    url(r'^$', VideoList.as_view(), name='list'),
    url(r'^(?P<slug>[\w-]+)/$', VideoDetail.as_view()),
]
