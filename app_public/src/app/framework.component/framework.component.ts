import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // 1. CRITICAL: Import RouterOutlet

@Component({
  selector: 'app-framework', 
  standalone: true, 
  // 2. CRITICAL: Add RouterOutlet to imports
  imports: [RouterOutlet], 
  template: `
    <!-- Comprehensive Framework Layout with Tailwind CSS -->
    <div class="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      <!-- 1. Header/Navbar -->
      <header class="sticky top-0 z-40 w-full bg-indigo-700 shadow-lg text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="text-2xl font-bold">RouteFinder</div>
          <!-- No mobile menu toggle needed for this simple fixed layout -->
        </div>
      </header>

      <!-- 2. Main Content Container -->
      <div class="flex flex-1 overflow-hidden p-4 sm:p-8 justify-center items-start">
        
        <!-- 3. Page Content Area -->
        <!-- This is where Angular will render the components for the active route! -->
        <main class="flex-1 max-w-4xl flex justify-center mt-10">
          <router-outlet></router-outlet>
        </main>
        
      </div>
    </div>
  `,
  // Styles are defined inline
  styles: [`
    :host {
      display: block;
      /* Ensures the component takes up the full viewport height */
      height: 100vh;
      width: 100%;
    }
  `]
})
export class FrameworkComponent {}
