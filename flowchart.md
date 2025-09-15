``` mermaid

flowchart TD
    A((Start Application)) --> B[Display Welcome Screen]
    B --> C[/Show Main Menu/]
    
    C --> D{User Choice}
    
    D -->|1| E[Sequential Cooking Mode]
    D -->|2| F[Parallel Cooking Mode]
    D -->|3| G[Custom Cooking Mode]
    D -->|4| H[Exit Application]
    D -->|false| I[/Show Error Message/]
    
    I --> C
    
    E --> E1[Start Timer]
    E1 --> E2[Cook Rice - 3s]
    E2 --> E3[Cook Vegetables - 2s]
    E3 --> E4[Make Tea - 1s]
    E4 --> E5[Calculate Total Time]
    E5 --> E6[/Display Results/]
    E6 --> J[Wait for Enter]
    
    F --> F1[Start Timer]
    F1 --> F2[Cook All Dishes Simultaneously]
    F2 --> F2a[Cook Rice - 3s]
    F2 --> F2b[Cook Vegetables - 2s]
    F2 --> F2c[Make Tea - 1s]
    F2a --> F3[Wait for All to Complete]
    F2b --> F3
    F2c --> F3
    F3 --> F4[Calculate Total Time]
    F4 --> F5[/Display Results/]
    F5 --> J
    
    G --> G1[Display Available Dishes]
    G1 --> G2[/User Select Dishes/]
    G2 --> G3{Any Dishes Selected?}
    
    G3 -->|No| G4[Show No Dishes Message]
    G4 --> J
    
    G3 -->|Yes| G5[Choose Cooking Mode]
    G5 --> G6{Sequential or Parallel?}
    
    G6 -->|Sequential| G7[Start Timer]
    G7 --> G8[Cook Each Dish One by One]
    G8 --> G9[Calculate Total Time]
    G9 --> G10[/Display Results/]
    G10 --> J
    
    G6 -->|Parallel| G11[Start Timer]
    G11 --> G12[Cook All Selected Dishes Simultaneously]
    G12 --> G13[Wait for All to Complete]
    G13 --> G14[Calculate Total Time]
    G14 --> G15[/Display Results/]
    G15 --> J
    
    J --> K{Continue?}
    K -->|Yes| C
    K -->|No| H
    
    H --> L[/Show Goodbye Message/]
    L --> M[Close Application]
    M --> N(((End)))
    

    ```