from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from videos.models import Video
from .serializers import VideoSerializer


class VideoList(generics.ListAPIView):
    queryset                = Video.objects.all()
    serializer_class        = VideoSerializer
    permission_classes      = []
    authentication_classes  = []