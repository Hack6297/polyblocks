from django.http import JsonResponse

def join_game(request):
    return JsonResponse({"status": "ok"})