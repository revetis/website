from django.utils.translation import get_language
from rest_framework import serializers
from .models import BlogPost, Category, Tags

class CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()

    def get_name(self, obj):
        lang = get_language()
        return getattr(obj, f"name_{lang}", obj.name)

    def get_slug(self, obj):
        lang = get_language()
        return getattr(obj, f"slug_{lang}", obj.slug)

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class TagsSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()

    def get_name(self, obj):
        lang = get_language()
        return getattr(obj, f"name_{lang}", obj.name)

    def get_slug(self, obj):
        lang = get_language()
        return getattr(obj, f"slug_{lang}", obj.slug)

    class Meta:
        model = Tags
        fields = ['id', 'name', 'slug']


class BlogPostSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    content = serializers.SerializerMethodField()
    category = CategorySerializer(read_only=True)
    tags = TagsSerializer(many=True, read_only=True)
    author = serializers.StringRelatedField()

    def get_title(self, obj):
        lang = get_language()
        return getattr(obj, f"title_{lang}", obj.title)

    def get_content(self, obj):
        lang = get_language()
        return getattr(obj, f"content_{lang}", obj.content)

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'content', 'author',
            'category', 'tags', 'created_at', 'updated_at'
        ]
