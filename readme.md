# Aplikasi Simulasi Dapur

Aplikasi console interaktif untuk mensimulasikan proses memasak dengan dua mode berbeda: **Sequential** (berurutan) dan **Parallel** (bersamaan).

## Deskripsi

Aplikasi ini mendemonstrasikan perbedaan antara pemrosesan sequential dan parallel dalam konteks memasak. Pengguna dapat memilih berbagai jenis masakan dan melihat bagaimana waktu memasak berbeda antara kedua mode tersebut.

## Fitur Utama

- **Sequential Cooking**: Memasak satu per satu secara berurutan
- **Parallel Cooking**: Memasak semua hidangan secara bersamaan  
- **Custom Cooking**: Pilih hidangan sendiri dengan mode sequential atau parallel
- **Timer Simulator**: Simulasi waktu memasak yang realistis
- **Interface Interaktif**: Menu console yang user-friendly

## Jenis Masakan

| Masakan | Waktu Memasak |
|---------|---------------|
| Nasi | 3 detik |
| Sayur | 2 detik |
| Teh | 1 detik |
| Ayam Goreng | 4 detik |
| Ikan Bakar | 3 detik |
| Sup | 2 detik |

## Struktur Project

```
kitchen-simulator/
├── index.js                 # Entry point aplikasi
├── lib/
│   ├── kitchenApp.js        # Main application class
│   ├── cookingManage.js     # Cooking management logic
│   ├── cookingService.js    # Cooking operations
│   ├── display.js           # Display/UI utilities
│   ├── inputUser.js         # User input handling
│   └── timer.js             # Timer utilities
└── README.md
```

## Instalasi dan Menjalankan

### Prerequisites
- Node.js 

### Langkah Instalasi

1. Clone atau download project ini
2. Buka terminal di direktori project
3. Jalankan aplikasi:

```bash
node index.js
npm run dev
```

## Cara Penggunaan

1. **Jalankan aplikasi** dengan `node index.js` atau `npm run dev`
2. **Pilih menu** yang tersedia:
   - `1` - Sequential Cooking (nasi, sayur, teh berurutan)
   - `2` - Parallel Cooking (nasi, sayur, teh bersamaan)
   - `3` - Custom Cooking (pilih masakan dan mode sendiri)
   - `4` - Exit (keluar dari aplikasi)

### Contoh Output Sequential vs Parallel

**Sequential Mode:**
```
Mulai memasak Nasi...
Nasi sudah matang!
Mulai memasak Sayur...
Sayur sudah matang!
Mulai memasak Teh...
Teh sudah matang!

Total waktu: 6 detik
```

**Parallel Mode:**
```
Mulai memasak Nasi...
Mulai memasak Sayur...
Mulai memasak Teh...
Teh sudah matang!
Sayur sudah matang!
Nasi sudah matang!

Total waktu: 3 detik
```

## Arsitektur Kode

### Class Overview

- **KitchenApp**: Orchestrator utama yang mengatur alur aplikasi
- **CookingManager**: Mengelola proses memasak sequential dan parallel
- **CookingService**: Handler untuk operasi memasak individual
- **Display**: Utility untuk menampilkan output ke console
- **UserInput**: Handler untuk input dari pengguna
- **Timer**: Utility untuk simulasi waktu dan delay



## Flow Aplikasi

1. **Start** → Tampilkan welcome screen
2. **Main Menu** → Tampilkan pilihan menu
3. **User Input** → Terima pilihan dari user
4. **Process Choice**:
   - Sequential: Jalankan masakan satu per satu
   - Parallel: Jalankan semua masakan bersamaan
   - Custom: Biarkan user pilih masakan dan mode
5. **Display Results** → Tampilkan hasil dan waktu total
6. **Continue/Exit** → Kembali ke menu atau keluar

## Konsep Pemrograman yang Didemonstrasikan

### 1. Asynchronous Programming
```javascript
// Sequential
for (const dish of dishes) {
    const result = await this.cookingService.cookDish(dish);
    results.push(result);
}

// Parallel  
return await Promise.all([
    this.cookingService.cookRice(),
    this.cookingService.cookVegetables(),
    this.cookingService.makeTea()
]);
```

### 2. Promise Handling
- Menggunakan `async/await` untuk readability
- `Promise.all()` untuk parallel execution
- Error handling dengan try-catch

### 3. Modular Design
- Separation of concerns
- Reusable components
- Clean interfaces between modules

## Learning Objectives

Aplikasi ini membantu memahami:
- Perbedaan antara pemrosesan sequential vs parallel
- Implementasi async/await dalam JavaScript
- Promise.all() untuk concurrent operations
- Modular programming dan clean architecture
- User input handling di Node.js

