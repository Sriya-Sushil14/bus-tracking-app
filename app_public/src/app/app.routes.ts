import { Routes } from '@angular/router';

// IMPORTANT: Updated imports to match the probable file names in your directories (e.g., home.ts instead of home.component.ts)
import { HomeComponent } from './home/home'; 
import { SearchComponent } from './search/search'; 
import { FindBrComponent } from './findbr/findbr'; 
import { FindBnComponent } from './findbn/findbn'; 


export const routes: Routes = [
  // 1. Landing Page: When the path is empty (the base URL)
  { path: '', component: HomeComponent, title: 'Home' }, 
  
  // 2. Search Page: The navigation hub
  { path: 'search', component: SearchComponent, title: 'Search Options' },
  
  // 3. Find by Route Page
  { path: 'find-by-route', component: FindBrComponent, title: 'Search by Route' },
  
  // 4. Find by Number Page
  { path: 'find-by-number', component: FindBnComponent, title: 'Search by Number' },
  
  // Optional: Wildcard route for 404/Unknown path redirection
  { path: '**', redirectTo: '', pathMatch: 'full' }
];