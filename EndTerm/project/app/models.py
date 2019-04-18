from django.db import models

class Post(models.Model):
  title = models.CharField(max_length=200, blank=True)
  content = models.CharField(max_length=1000, blank=True)
  def __str__(self):
    return self.title
