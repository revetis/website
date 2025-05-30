from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name=_("Category Name"))
    slug = models.SlugField(unique=True, verbose_name=_("Category Slug"))

    def __str__(self):
        return self.name
    
class Tags(models.Model):
    name = models.CharField(max_length=50,verbose_name=_("Tags Name"))
    slug = models.SlugField(unique=True, verbose_name=_("Tags Slug"))

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title= models.CharField(max_length=200, verbose_name=_("Post Title"))
    slug = models.SlugField(unique=True, verbose_name=_("Post Slug"))
    content = RichTextField(verbose_name=_("Post Content"))
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_("Author"))
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name=_("Category"))
    tags = models.ManyToManyField(Tags)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    def __str__(self):
        return self.title
    
    