from .models import BlogPost, Category, Tags
from modeltranslation.translator import register, TranslationOptions

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name', 'slug')

@register(Tags)
class TagsTranslationOptions(TranslationOptions):
    fields = ('name', 'slug')

@register(BlogPost)
class BlogPostTranslationOptions(TranslationOptions):
    fields = ('title','content','category','tags')