from django.db import models
from django.db.models import Q
from django.db.models.signals import pre_save

from .utils import unique_slug_generator

class VideoQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
                Q(name__icontains=query) |
                Q(slug__icontains=query) |
                Q(embed__icontains=query)
            )

class VideoManager(models.Manager):
    def get_queryset(self):
        return VideoQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self):
        return self.get_queryset().featured().active()

    def search(self, query):
        return self.get_queryset().search(query).active()


class Video(models.Model):
    name        = models.CharField(max_length=220)
    slug        = models.SlugField(unique=True, blank=True)
    embed       = models.CharField(max_length=120, help_text='YouTube embed code', null=True, blank=True)
    #image_path  = models.CharField(max_length=120, default="https://angulardjango.s3-us-west-2.amazonaws.com/static/ang/assets/images/nature/4.jpg", blank=True, null=True)
    image2      = models.ImageField(upload_to='images/', null=True, blank=True)
    active      = models.BooleanField(default=True)
    featured    = models.BooleanField(default=False)
    timestamp   = models.DateTimeField(auto_now_add=True)

    objects = VideoManager()

    def __str__(self): # __unicode__
        return self.name

    @property
    def title(self):
        return self.name


def video_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(video_pre_save_receiver, sender=Video)