from django.contrib import admin
from portfolio.models import Project
from modeltranslation.admin import TranslationAdmin

@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    list_display = ('title', 'description','image','link')  
    search_fields = ('title',)
