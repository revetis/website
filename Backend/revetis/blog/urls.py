from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet, CategoryViewSet, TagsViewSet

router = DefaultRouter()
router.register(r'blogposts', BlogPostViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagsViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
