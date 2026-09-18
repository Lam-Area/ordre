<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Ordre</title>
        
        <!-- C'est cette ligne unique qui charge le CSS et le JS compilés par Vite -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    </head>
    <body class="antialiased">
        <!-- Conteneur unique pour React -->
        <div id="app"></div>
    </body>
</html>