from rest_framework import serializers
from django.utils.translation import get_language
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    image = serializers.ImageField(use_url=True)

    def get_title(self, obj):
        lang = get_language()
        return getattr(obj, f"title_{lang}", obj.title)

    def get_description(self, obj):
        lang = get_language()
        return getattr(obj, f"description_{lang}", obj.description)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image']
