@extends('_layouts.master')

@section('title', 'Contact')

@section('content')
    <h1 class="text-3xl font-bold">Contact</h1>

    <form name="contact" action="/contact/sent" method="post" class="w-full lg:w-2/3" netlify-honeypot="bot-field" netlify>
        {{-- Form Subject --}}
        <input type="hidden" name="subject" value="Fitz-Maurice Contact Page" />
        {{-- After Redirect --}}
        <input type="hidden" name="after" value="{{ $page->production ? $page->baseUrl : 'http://localhost:3000' }}/contact/sent" />
        {{-- Honeypot --}}
        <input type="hidden" name="bot-field" />

        {{-- Name --}}
        <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Full name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-5 tracking-wide focus:outline-none focus:ring-fitz focus:ring-4 focus:ring-opacity-20 focus:border-fitz hover:border-4" required>
        </div>

        {{-- Email --}}
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-5 tracking-wide focus:outline-none focus:ring-fitz focus:ring-4 focus:ring-opacity-20 focus:border-fitz hover:border-4" required>
        </div>

        {{-- Message --}}
        <div class="mb-4">
            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea name="message" id="message" placeholder="Message" class="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-5 tracking-wide focus:outline-none focus:ring-fitz focus:ring-4 focus:ring-opacity-20 focus:border-fitz hover:border-4 h-32" required></textarea>
        </div>

        {{-- Send --}}
        <input type="submit" value="Send" class="bg-fitz text-white font-semibold rounded px-4 py-2 cursor-pointer hover:shadow-lg">
    </form>
@endsection
