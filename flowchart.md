 ```mermaid

flowchart TD
    A((Start)) --> B[Tampilkan Menu]
    
    B --> C{Pilihan User}
    
    C -->|1| D[Sequential Cooking<br/>Masak satu per satu]
    C -->|2| E[Parallel Cooking<br/>Masak bersamaan]
    C -->|3| F[Custom Cooking<br/>Pilih menu sendiri]
    C -->|4| G[Exit]
    
    D --> H[/Tampilkan Hasil/]
    E --> H
    F --> H
    
    H --> I{Lanjut?}
    I -->|Ya| B
    I -->|Tidak| G
    
    G --> J(((End)))
    

    ```