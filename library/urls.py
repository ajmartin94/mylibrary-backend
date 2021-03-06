from django.urls import path, include
from rest_framework import routers
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

router = routers.DefaultRouter()
router.register(r'users',views.UserViewSet)
router.register(r'books',views.BooksViewSet)
router.register(r'library',views.LibraryViewSet)
router.register(r'ratings',views.RatingsViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh',TokenRefreshView.as_view(),name='token_refresh')
]