from django.db import models

# Create your models here.
# directory/models.py
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    visits = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Page(models.Model):
    category = models.ForeignKey(Category, related_name='pages', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    url = models.URLField()
    views = models.IntegerField(default=0)

    def __str__(self):
        return self.title
