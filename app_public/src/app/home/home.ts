import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl w-full max-w-lg">
      <h2 class="text-5xl font-extrabold text-indigo-700 mb-4">RouteFinder Welcome</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-lg text-center">
        Your journey to efficient route searching starts here.
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