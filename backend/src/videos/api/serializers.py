from rest_framework import serializers

from videos.models import Video

class VideoSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    class Meta:
        model = Video
        fields = ['name', 'slug', 'embed', 'featured', 'image']

    def get_image(self, obj):
        return "/static/ang/assets/images/nature/4.jpg"


class VideoDetailSerializer(serializers.ModelSerializer):
    image       = serializers.SerializerMethodField()
    is_promo    = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = [
            'name', 
            'slug', 
            'embed', 
            'featured', 
            'image',
            'is_promo',
        ]

    def get_image(self, obj):
        return "/static/ang/assets/images/nature/4.jpg"

    def get_is_promo(self, obj):
        return False

