# Pokédex — Expo / React Native

A production-quality Pokémon encyclopedia built with **Expo**, **React Native**, and **TypeScript**, powered live by [PokéAPI](https://pokeapi.co/). No Pokémon data is hardcoded — everything (list, stats, types, abilities, evolutions) is fetched at runtime.

## Features

- Browse all Pokémon with an infinite-scroll grid (2 columns), official artwork, and type badges
- Debounced search by name or Pokédex number
- Filter by any of the 18 types, sort by number / name A–Z / name Z–A
- Detail screen: base stats (with color-coded bars + total), height/weight/base experience, abilities, and a fully connected evolution chain (tap any stage to jump to it)
- Team builder: add up to **6** Pokémon, prevents duplicates, reorder with left/right controls, remove individually or clear all, team type-distribution summary
- Team persists across app restarts via `AsyncStorage`
- Light/dark theme toggle, persisted, defaults to the system preference
- Loading skeletons, empty states, and retryable error states throughout
- In-memory caching of API responses to avoid refetching while browsing

## Tech stack

React Native (Expo SDK 51) · TypeScript · React Navigation (bottom tabs + native stack) · AsyncStorage · lucide-react-native icons

## Project structure

```
App.tsx
src/
  types/        API + domain TypeScript interfaces
  services/      pokemonApi.ts — all PokéAPI calls + caching
  utils/         type colors, formatters, stat helpers
  context/       ThemeContext, TeamContext (global state + persistence)
  hooks/         usePokedexList, usePokemonBasic, usePokemonFullDetail, useDebounce
  components/    PokemonCard, TypeBadge, StatBar, SearchBar, FilterSortBar,
                 EvolutionNode, TeamSlotCard, ScreenHeader, EmptyState,
                 ErrorView, SkeletonCard
  screens/       PokedexScreen, PokemonDetailScreen, TeamScreen
  navigation/    RootNavigator (tabs) + per-tab stacks
```

## Running it

You already have Expo working locally (as seen in your terminal), so from this project folder:

```powershell
npm install
npx expo start
```

Then scan the QR code with **Expo Go** on your phone, or press `a` / `i` in the terminal for an Android/iOS simulator, or `w` for web.

## Notes

- The app talks directly to `https://pokeapi.co/api/v2` — no API key needed, no backend to run.
- The full name/ID list is fetched once and cached in memory; individual Pokémon, species, and evolution-chain data are cached per-item as you browse.
- Team and theme state live in `AsyncStorage` under the keys `pokedex.team` and `pokedex.theme`.
