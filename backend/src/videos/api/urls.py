from django.conf.urls import url

from .views import VideoList

urlpatterns = [
    url(r'^$', VideoList.as_view(), name='list'),
]
