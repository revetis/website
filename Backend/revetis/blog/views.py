from rest_framework import viewsets
from .models import BlogPost, Category, Tags
from .serializers import BlogPostSerializer, CategorySerializer, TagsSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    filterset_fields = ['author', 'category', 'tags']
    search_fields = ['title', 'content']

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    search_fields = ['name']

class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer
    search_fields = ['name']
