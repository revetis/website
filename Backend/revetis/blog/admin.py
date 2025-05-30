from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import BlogPost, Category, Tags

@admin.register(Category)
class CategoryAdmin(TranslationAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Tags)
class TagsAdmin(TranslationAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

@admin.register(BlogPost)
class BlogPostAdmin(TranslationAdmin):
    list_display = ('title', 'author', 'category','get_tags', 'created_at', 'updated_at')
    search_fields = ('title', 'content')
    list_filter = ('author', 'category', 'created_at')
    prepopulated_fields = {"slug": ("title",)}

    @admin.display(description='Tags')
    def get_tags(self, obj):
        return ", ".join([tag.name for tag in obj.tags.all()])

