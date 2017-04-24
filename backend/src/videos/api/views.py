from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from videos.models import Video
from .serializers import VideoSerializer, VideoDetailSerializer


class VideoList(generics.ListAPIView):
    serializer_class        = VideoSerializer
    permission_classes      = []
    authentication_classes  = []

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
            # qs = Video.objects.filter(name__icontains=query)
            qs = Video.objects.search(query)
        else:
            qs = Video.objects.all()
        return qs


class VideoDetail(generics.RetrieveAPIView):
    #queryset                = Video.objects.all()
    serializer_class        = VideoDetailSerializer
    lookup_field            = 'slug'
    permission_classes      = []
    authentication_classes  = []

    def get_queryset(self):
        return Video.objects.all()


class VideoFeatured(generics.ListAPIView):
    serializer_class        = VideoSerializer
    permission_classes      = []
    authentication_classes  = []

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
            qs = Video.objects.featured().search(query)
        else:
            qs = Video.objects.featured()
        return qs

