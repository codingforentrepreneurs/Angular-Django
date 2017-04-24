from django.db import models

# Create your models here.

class Video(models.Model):
    name        = models.CharField(max_length=220)
    slug        = models.SlugField(unique=True, blank=True)
    embed       = models.CharField(max_length=120, null=True, blank=True)
    featured    = models.BooleanField(default=False)
    timestamp   = models.DateTimeField(auto_now_add=True)

    def __str__(self): # __unicode__
        return self.name

'''
{
 "name": "Welcome",
 "slug": "item-1",
 "embed": "1hyjLD7pk10",
 "image": "/static/ang/assets/images/nature/4.jpg",
 "featured": true
}
'''