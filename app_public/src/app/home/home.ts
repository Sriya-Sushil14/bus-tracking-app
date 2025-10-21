import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl">
      <h2 class="text-5xl font-extrabold text-indigo-700 mb-4">Welcome to SmartBus Tracker</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-lg text-center">
        Track buses, find routes between locations, and read reviews from passengers.
      </p>
      <button 
        [routerLink]="['/search']"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  `
})
export class HomeComponent {}
