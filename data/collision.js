const  collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 856, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 856, 856, 0, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 856, 0, 0, 856, 856, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 0, 0, 856, 856, 0, 856, 0, 0, 0, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 0, 856, 856, 0, 856, 856, 856, 856, 856, 0, 856, 856, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0,
    0, 0, 0, 0, 856, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 856, 856, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 0, 0, 856, 856, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 856, 856, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 856, 856, 856, 856, 856, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 856, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 856, 856, 0, 856, 856, 856, 856, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 856, 0, 856, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0, 856, 0,
    0, 0, 0, 0, 856, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 856, 0, 0, 0, 0, 856, 0, 856, 856, 856, 0, 0, 856, 0, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 856, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 856, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0,
    0, 0, 0, 856, 0, 0, 0, 856, 856, 0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0,
    0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 856, 856, 856, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 4, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 0,
    0, 0, 856, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 856, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 856, 0,
    0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 856, 0, 0,
    0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0,
    0, 856, 0, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 856, 0, 0, 0,
    0, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0,
    0, 0, 856, 856, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 0, 0, 856, 0, 856, 856, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 0, 0, 0, 856, 0, 0, 856, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 0, 856, 0, 0, 856, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 856, 856, 0, 0, 0, 0,
    0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 856, 0, 856, 0, 0, 0, 0, 856, 0, 0, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 856, 0, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 0, 0, 856, 856, 0, 856, 856, 0, 0, 0, 0, 856, 856, 0, 0, 0, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 0, 0,
    0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 856, 0, 0, 0,
    0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 0, 0, 856, 856, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 856, 856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]