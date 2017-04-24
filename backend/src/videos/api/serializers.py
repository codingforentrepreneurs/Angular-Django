from rest_framework import serializers

from videos.models import Video

class VideoSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Video
        fields = ['name', 'slug', 'embed', 'featured', 'image']

    def get_image(self, obj):
        return "/static/ang/assets/images/nature/4.jpg"