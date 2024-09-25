// Diccionario de respuestas
const respuestas = {
    "wisebot": "¡Hola!,dime, ¿en qué puedo ayudarte?",
    "hola": "¡Hola!, aqui esta la lista de cosas que puedes pedirme: 1. cual es tu nombre?, 2. que puedes hacer?, 3. como puedes ayudarme?, 4. ver menu. (Si deseas seleccionar alguna de estas opciones, puedes escribir el numero de la que quieras (ejemplo: 0)) ",
    "bien y tu?":"¡Que bueno que estes bien, cuanto me alegra!, yo estoy bien tambien, gracias por preguntar, dime, ¿en que puedo ayudarte?",
    "adios": "¡Adiós! Que tengas un buen día.",
    "chao": "¡Chao! Que tengas un buen día.",
    "como estas?": "Estoy bien, gracias por preguntar, y tu?.",
    "gracias": "¡De nada, fue un placer poder ayudarte! ¿puedo ayudarte con algo mas?",
    /*Ver opciones*/"0":" las opciones disponibles son: 1. cual es tu nombre?, 2. que puedes hacer?, 3. como puedes ayudarme?, 4. ver menu. (Si deseas seleccionar alguna de estas opciones, puedes escribir el numero de la que quieras (ejemplo: 0)) ",
    /*Cual es tu nombre*/"1": "Mi nobre es WiseBot.",
    /*Que puedes hacer?*/"2":"Bueno, soy un Bot que te puede ayudar con alguna receta que necesites,(si quieres saber cuales son puedes escribir 'menu')",
    /*Como puedes ayudarme?*/"3":"Bueno, soy un Bot que te puede ayudar con alguna receta que necesites, (si quieres saber cuales son puedes escribir 'menu')",
    /*Ver menu*/"4":"Seleccione el tipo de recetas 'Pasteleria o Comida corriente' (Para seleccionar el tipo de recetas escriba la letra p (para Pasteleria) o la letra c (para Comida corriente)",
    "menu":"Seleccione el tipo de recetas 'Pasteleria o Comida corriente' (Para seleccionar el tipo de recetas escriba la letra p (para Pasteleria) o la letra c (para Comida corriente)",
    "p":" Las recetas con las que te puedo ayudar son: 1. un pastel de chocolate, 2. cupcakes, 3. un cheesecake, 4. macarons, 5. galletas, 6. un brownie, 7. tarta de manzana, 8. un tiramisú, 9. un pastel de zanahoria, 10. muffins, 11. una tarta de limon, 12. un bizcocho esponjoso, 13. flan, 14. crema pastelera, 15. churros, 16. souffle de chocolate, 17. profiteroles, 18. tarta de queso japonesa, 19. una pavlova, 20. galletas de avena, 21. donas, 22. pastel de tres leches, 23. volcán de chocolate, 24. strudel de manzana, 25. pan de plátano. (Si deseas preguntar por alguno de estos : puedes escribir el numero de la receta que quieras acompañado de un p (ejemplo: 0p))",
    "c":"Las recetas con las que te puedo ayudar son: 1. arroz con pollo, 2. ensalada de pasta, 3. una tortilla de papas, 4. espaguetis a la boloñesa, 5. lentejas estofadas, 6. pollo al curry, 7. hamburguesa, 8. una lasaña, 9. tacos, 10. sopa de verduras, 11. arroz a la cubana, 12. pechuga rellena, 13. empanadas, 14. estofado de res, 15. chilaquiles, 16. milanesas de pollo, 17. ceviche de pescado, 18. guiso de carne, 19. carne asada, 20. enchiladas, 21. sopa de fideos, 22. pollo a la plancha, 23. picadillo, 24. fajitas de res, 25. locro de papa, 26.ensalada rusa, 27. arepas, 28. tacos al pastor.  (Si deseas preguntar por alguno de estos: puedes escribir el numero de la receta que quieras acompañado de un c (ejemplo: 0c))",

  // Recetas de pastelería
"1p": "Para hacer un pastel de chocolate necesitas: 1 taza de harina, 1 taza de azúcar, 1/2 taza de cacao en polvo, 1 cucharadita de polvo de hornear, 1/2 cucharadita de bicarbonato de sodio, 1/2 cucharadita de sal, 1/2 taza de leche, 1/4 taza de aceite, 1 huevo y 1/2 taza de agua caliente. Mezcla los ingredientes secos, añade los líquidos, hornea a 180°C por 30-35 minutos y disfruta.",

"2p": "Para hacer cupcakes necesitas: 1 taza de harina, 1 taza de azúcar, 1/2 taza de mantequilla, 2 huevos, 1/2 taza de leche, 1 cucharadita de extracto de vainilla, 1 y 1/2 cucharadita de polvo de hornear y una pizca de sal. Bate la mantequilla con el azúcar, agrega los huevos y la vainilla, añade los ingredientes secos y finalmente la leche. Hornea a 180°C por 20-25 minutos.",

"3p": "Para hacer un cheesecake clásico necesitas: 200g de galletas trituradas, 100g de mantequilla derretida, 500g de queso crema, 200g de azúcar, 3 huevos, 1 cucharadita de extracto de vainilla y 200ml de crema agria. Mezcla las galletas con la mantequilla para hacer la base, mezcla el resto de los ingredientes para el relleno, hornea a 160°C por 50-60 minutos.",

"4p": "Para hacer macarons necesitas: 200g de azúcar glas, 100g de almendra molida, 100g de claras de huevo a temperatura ambiente, 30g de azúcar granulada y colorante alimentario (opcional). Tamiza el azúcar y almendra, bate las claras con el azúcar hasta formar picos, mezcla con la almendra, forma los macarons y hornea a 150°C por 12-15 minutos.",

"5p": "Para hacer galletas básicas necesitas: 1 taza de mantequilla, 1 taza de azúcar, 1 huevo, 2 tazas de harina, 1 cucharadita de polvo de hornear y una pizca de sal. Bate la mantequilla con el azúcar, añade el huevo, incorpora la harina con el polvo de hornear y sal. Forma las galletas y hornea a 180°C por 10-12 minutos.",

"6p": "Para hacer brownies necesitas: 200g de chocolate, 150g de mantequilla, 250g de azúcar, 3 huevos, 100g de harina y una pizca de sal. Derrite el chocolate con la mantequilla, agrega el azúcar y los huevos, añade la harina y mezcla bien. Hornea a 180°C por 25-30 minutos.",

"7p": "Para hacer tarta de manzana necesitas: 2 tazas de harina, 1/2 taza de azúcar, 1/2 taza de mantequilla fría, 1 huevo, 5 manzanas, 1/4 taza de azúcar moreno y canela. Haz la masa con la harina, azúcar, mantequilla y huevo. Corta las manzanas, mézclalas con el azúcar moreno y la canela, colócalas sobre la masa y hornea a 180°C por 45 minutos.",

"8p": "Para hacer tiramisú necesitas: 200g de bizcochos de soletilla, 250g de mascarpone, 3 huevos, 100g de azúcar, 1 taza de café, 2 cucharadas de licor de café (opcional) y cacao en polvo. Bate las yemas con el azúcar, añade el mascarpone, monta las claras a punto de nieve e incorpóralas a la mezcla. Moja los bizcochos en café, alterna capas de bizcochos y crema, y espolvorea con cacao.",

"9p": "Para hacer un pastel de zanahoria necesitas: 2 tazas de zanahoria rallada, 1 taza de azúcar, 1 taza de aceite vegetal, 3 huevos, 2 tazas de harina, 1 cucharadita de polvo de hornear, 1 cucharadita de bicarbonato, 1 cucharadita de canela y una pizca de sal. Mezcla todo, hornea a 180°C por 35-40 minutos y disfruta.",

"10p": "Para hacer muffins necesitas: 2 tazas de harina, 1 taza de azúcar, 1/2 taza de leche, 1/2 taza de mantequilla derretida, 2 huevos, 1 cucharadita de polvo de hornear y una pizca de sal. Mezcla los ingredientes secos, añade los líquidos, incorpora frutas o chispas de chocolate y hornea a 180°C por 20-25 minutos.",

"11p": "Para hacer una tarta de limón necesitas: 1 base de masa quebrada, 3 yemas de huevo, 1 lata de leche condensada, 1/2 taza de jugo de limón y ralladura de limón. Mezcla las yemas con la leche condensada y el jugo, vierte sobre la masa prehorneada y hornea a 160°C por 15-20 minutos.",

"12p": "Para hacer un bizcocho esponjoso necesitas: 4 huevos, 200g de azúcar, 200g de harina, 1 cucharadita de levadura y una pizca de sal. Bate los huevos con el azúcar hasta doblar su tamaño, añade la harina y levadura tamizadas. Hornea a 180°C por 25-30 minutos.",

"13p": "Para hacer flan necesitas: 1 lata de leche condensada, 1 lata de leche evaporada, 4 huevos y 1 taza de azúcar para el caramelo. Prepara el caramelo en el molde, mezcla los ingredientes del flan, vierte sobre el caramelo y hornea al baño maría a 160°C por 45-50 minutos.",

"14p": "Para hacer crema pastelera necesitas: 500ml de leche, 100g de azúcar, 4 yemas de huevo, 40g de maicena y 1 cucharadita de esencia de vainilla. Calienta la leche con la vainilla, bate las yemas con el azúcar y la maicena, añade la leche caliente y cocina hasta espesar.",

"15p": "Para hacer churros necesitas: 1 taza de agua, 1 taza de harina, 1 cucharada de mantequilla, 1 cucharada de azúcar, 1/2 cucharadita de sal y aceite para freír. Hierve el agua con la mantequilla, azúcar y sal, añade la harina, mezcla bien, forma los churros y fríelos hasta dorar. Espolvorea con azúcar.",

"16p": "Para hacer un soufflé de chocolate necesitas: 100g de chocolate, 2 cucharadas de mantequilla, 2 cucharadas de harina, 1 taza de leche, 4 huevos, 50g de azúcar y una pizca de sal. Derrite el chocolate con mantequilla, añade la harina, la leche caliente, las yemas y el azúcar. Incorpora las claras a punto de nieve. Hornea a 180°C por 12-15 minutos.",

"17p": "Para hacer profiteroles necesitas: 1 taza de agua, 1/2 taza de mantequilla, 1 taza de harina, 4 huevos y una pizca de sal. Hierve el agua con la mantequilla y sal, añade la harina, mezcla bien, agrega los huevos uno a uno. Forma bolitas, hornea a 200°C por 20-25 minutos y rellena con crema o helado.",

"18p": "Para hacer una tarta de queso japonesa necesitas: 250g de queso crema, 50g de mantequilla, 100ml de leche, 6 huevos separados, 140g de azúcar, 60g de harina, 20g de maicena y 1/2 cucharadita de jugo de limón. Derrite el queso, mantequilla y leche, añade las yemas, harina y maicena. Incorpora las claras batidas a punto de nieve. Hornea al baño maría a 160°C por 60 minutos.",

"19p": "Para hacer una pavlova necesitas: 4 claras de huevo, 200g de azúcar, 1 cucharadita de vinagre, 1 cucharadita de maicena y 1 cucharadita de extracto de vainilla. Bate las claras hasta formar picos, añade el azúcar poco a poco, incorpora el vinagre, maicena y vainilla. Hornea a 120°C por 1 hora y decora con crema y frutas.",

"20p":"Para hacer galletas de avena necesitas: 1 taza de mantequilla, 1 taza de azúcar, 1 taza de azúcar moreno, 2 huevos, 2 tazas de avena, 1 1/2 tazas de harina, 1 cucharadita de bicarbonato, 1 cucharadita de canela, 1/2 cucharadita de sal y 1 taza de pasas (opcional). Bate la mantequilla con los azúcares, añade los huevos. Incorpora la avena, harina, bicarbonato, canela y sal. Mezcla bien y añade las pasas si deseas. Coloca cucharadas de la mezcla en una bandeja y hornea a 180°C por 12-15 minutos.",

"21p":"Para hacer donas necesitas: 2 tazas de harina, 1/2 taza de azúcar, 1 sobre de levadura, 1/2 taza de leche tibia, 2 cucharadas de mantequilla derretida, 1 huevo, 1 pizca de sal y aceite para freír. Mezcla la levadura con la leche y el azúcar, deja reposar 5 minutos. Añade la harina, sal, huevo y mantequilla, amasa y deja reposar hasta que duplique su tamaño. Extiende la masa y corta en forma de donas. Fríe en aceite caliente hasta dorar y baña con glaseado o azúcar.",

"22p":"Para hacer un pastel de tres leches necesitas: 1 taza de harina, 1 taza de azúcar, 1/2 taza de mantequilla, 4 huevos, 1 taza de leche, 1/2 taza de leche condensada, 1/2 taza de leche evaporada, 1 cucharadita de polvo de hornear y 1 cucharadita de vainilla. Bate la mantequilla con el azúcar, agrega los huevos y luego los secos. Hornea a 180°C por 25 minutos. Mezcla las leches y vierte sobre el pastel enfriado. Refrigera por 4 horas antes de servir.",

"23p":"Para hacer un volcán de chocolate necesitas: 200g de chocolate oscuro, 100g de mantequilla, 2 huevos, 2 yemas, 1/2 taza de azúcar, 1/4 taza de harina y una pizca de sal. Derrite el chocolate y la mantequilla. Bate los huevos con las yemas y el azúcar hasta espesar. Agrega el chocolate derretido y mezcla bien. Incorpora la harina y la sal. Vierte en moldes engrasados y hornea a 200°C por 10-12 minutos. Sirve caliente para que el interior esté líquido.",

"24p":"Para hacer strudel de manzana necesitas: 1 paquete de masa de hojaldre, 4 manzanas peladas y cortadas en rodajas, 1/2 taza de azúcar, 1 cucharadita de canela, 1/4 taza de pasas, 1/4 taza de nueces picadas y 1 huevo para barnizar. Mezcla las manzanas con el azúcar, canela, pasas y nueces. Extiende la masa, coloca el relleno y enrolla. Barniza con huevo y hornea a 180°C por 30-35 minutos hasta dorar.",

"25p":"Para hacer pan de plátano necesitas: 3 plátanos maduros, 1/3 taza de mantequilla derretida, 1 taza de azúcar, 1 huevo batido, 1 cucharadita de vainilla, 1 cucharadita de bicarbonato, 1 pizca de sal, y 1 1/2 tazas de harina. Tritura los plátanos y mezcla con la mantequilla. Agrega el azúcar, huevo, vainilla, bicarbonato y sal. Incorpora la harina. Vierte en un molde engrasado y hornea a 175°C por 60 minutos. Deja enfriar antes de desmoldar.",

 // Recetas de comida corriente
"1c": "Para hacer arroz con pollo necesitas: 1 taza de arroz, 1 pechuga de pollo en trozos, 1 cebolla picada, 1 pimiento rojo, 2 dientes de ajo, 2 tazas de caldo de pollo, 1 taza de arvejas, sal, pimienta y aceite. Sofríe el pollo con las verduras, añade el arroz, el caldo y cocina a fuego medio hasta que el arroz esté listo.",

"2c": "Para hacer una ensalada de pasta necesitas: 200g de pasta corta (macarrones, fusilli), 1 taza de tomate cherry, 1/2 taza de aceitunas negras, 1/2 taza de queso feta, 1/4 taza de aceite de oliva, 2 cucharadas de vinagre balsámico, sal, pimienta y albahaca fresca. Cocina la pasta, mezcla con los demás ingredientes y sirve fría.",

"3c": "Para hacer una tortilla de papas necesitas: 4 papas medianas, 1 cebolla, 5 huevos, sal y aceite. Pela y corta las papas en rodajas finas, fríelas con la cebolla en abundante aceite. Escurre bien, mezcla con los huevos batidos y cocina en una sartén a fuego medio hasta que cuaje.",

"4c": "Para hacer espaguetis a la boloñesa necesitas: 200g de espaguetis, 200g de carne molida, 1 cebolla, 2 dientes de ajo, 1 lata de tomate triturado, sal, pimienta, orégano y aceite. Sofríe la cebolla y el ajo, añade la carne, luego el tomate y condimentos. Cocina la pasta, mezcla con la salsa y sirve con queso rallado.",

"5c": "Para hacer lentejas estofadas necesitas: 1 taza de lentejas, 1 zanahoria, 1 papa, 1 cebolla, 2 dientes de ajo, 1 hoja de laurel, 1 chorizo, sal, pimienta y aceite. Sofríe la cebolla, ajo y chorizo, añade las lentejas, las verduras en trozos, cubre con agua y cocina a fuego lento hasta que estén tiernas.",

"6c": "Para hacer pollo al curry necesitas: 2 pechugas de pollo, 1 cebolla, 2 dientes de ajo, 1 lata de leche de coco, 2 cucharadas de curry en polvo, sal, pimienta y aceite. Sofríe la cebolla y ajo, añade el pollo en cubos, el curry y la leche de coco. Cocina a fuego medio por 15-20 minutos y sirve con arroz.",

"7c": "Para hacer hamburguesas necesitas: 500g de carne molida, 1 cebolla pequeña picada, 1 huevo, 2 cucharadas de pan rallado, sal, pimienta y especias al gusto. Mezcla todo, forma las hamburguesas, cocina en la parrilla o sartén y sirve con pan, lechuga, tomate y tus salsas favoritas.",

"8c": "Para hacer lasaña necesitas: láminas de pasta para lasaña, 400g de carne molida, 1 cebolla, 2 dientes de ajo, 1 lata de tomate triturado, bechamel, queso rallado, sal, pimienta y aceite. Sofríe la cebolla y el ajo, añade la carne y tomate, cocina por 20 minutos. Alterna capas de pasta, carne y bechamel, termina con queso y hornea a 180°C por 30 minutos.",

"9c": "Para hacer tacos necesitas: tortillas de maíz, 300g de carne (res, pollo o cerdo), 1 cebolla, 1 pimiento, especias al gusto (comino, chile, ajo en polvo), sal y aceite. Cocina la carne con las especias y verduras. Sirve en tortillas calientes con guacamole, crema agria y salsa.",

"10c": "Para hacer sopa de verduras necesitas: 2 zanahorias, 1 papa, 1 puerro, 1 calabacita, 1 cebolla, 2 litros de caldo de verduras, sal, pimienta y aceite. Sofríe la cebolla, añade las verduras en trozos, el caldo y cocina a fuego lento hasta que las verduras estén tiernas. Puedes triturar para una crema o dejarla tal cual.",

"11c": "Para hacer arroz a la cubana necesitas: 1 taza de arroz, 1 plátano, 2 huevos, 1 taza de salsa de tomate, aceite y sal. Cocina el arroz, fríe los plátanos y huevos por separado. Sirve el arroz con el plátano frito, el huevo encima y la salsa de tomate por el lado.",

"12c": "Para hacer pechugas rellenas necesitas: 2 pechugas de pollo, 4 lonchas de jamón, 4 lonchas de queso, sal, pimienta y aceite. Abre las pechugas en forma de libro, rellena con jamón y queso, cierra con palillos y cocina a la plancha o al horno hasta dorar.",

"13c": "Para hacer empanadas necesitas: masa para empanadas, 300g de carne molida, 1 cebolla, 1 huevo duro, aceitunas picadas, sal, pimienta y especias. Sofríe la cebolla con la carne, añade los demás ingredientes, rellena las empanadas, cierra bien y hornea a 180°C por 20 minutos o fríelas hasta dorar.",

"14c": "Para hacer estofado de res necesitas: 500g de carne de res en cubos, 2 zanahorias, 2 papas, 1 cebolla, 2 dientes de ajo, 1 vaso de vino tinto, 1 vaso de caldo, laurel, sal, pimienta y aceite. Sofríe la carne con cebolla y ajo, añade el vino, caldo y verduras. Cocina a fuego lento por 1-2 horas hasta que la carne esté tierna.",

"15c":"Para hacer chilaquiles necesitas: 10 tortillas de maíz cortadas en triángulos, 1 taza de salsa verde o roja, 1/2 taza de crema, 1/2 taza de queso fresco desmenuzado, 2 huevos (opcional), 1/4 taza de cebolla en rodajas y aceite. Fríe las tortillas hasta dorar, añade la salsa caliente y mezcla bien. Sirve con crema, queso, cebolla y huevos fritos si deseas.",

"16c":"Para hacer milanesas de pollo necesitas: 2 pechugas de pollo, 1 taza de pan rallado, 1/2 taza de harina, 2 huevos, sal, pimienta y aceite. Corta las pechugas en filetes, pásalos por harina, luego por huevo batido y finalmente por pan rallado. Fríe en aceite caliente hasta que estén doradas y crujientes.",

"17c":"Para hacer ceviche necesitas: 500g de filete de pescado (tilapia, corvina), 1 taza de jugo de limón, 1/2 cebolla morada, 1 tomate, 1 ají o chile, 1/4 taza de cilantro picado, sal y pimienta. Corta el pescado en cubos, mezcla con el jugo de limón y deja marinar por 20 minutos. Agrega la cebolla, tomate, ají y cilantro. Sirve frío.",

"18c":"Para hacer guiso de carne necesitas: 500g de carne de res en trozos, 2 papas, 2 zanahorias, 1 cebolla, 2 dientes de ajo, 1 lata de tomate triturado, 1 taza de caldo, laurel, sal, pimienta y aceite. Sofríe la carne con cebolla y ajo, añade las papas, zanahorias y el tomate. Cocina a fuego lento con el caldo y laurel hasta que la carne esté tierna.",

"19c":"Para hacer carne asada necesitas: 500g de carne (bistec de res), sal, pimienta, ajo en polvo, jugo de limón y aceite. Sazona la carne con sal, pimienta, ajo en polvo y un poco de jugo de limón. Asa en una parrilla caliente por 3-5 minutos de cada lado o al punto que prefieras. Sirve con guacamole, cebollitas y tortillas.",

"20c":"Para hacer enchiladas necesitas: 12 tortillas de maíz, 2 tazas de salsa de enchilada (verde o roja), 2 tazas de pollo desmenuzado, 1 taza de queso rallado, 1/2 taza de crema, 1/4 taza de cebolla picada y aceite. Calienta las tortillas, pásalas por la salsa, rellena con el pollo, enróllalas y colócalas en un refractario. Cubre con más salsa y queso, y hornea a 180°C por 15 minutos. Sirve con crema y cebolla.",

"21c":"Para hacer sopa de fideos necesitas: 1 taza de fideos (tipo cabello de ángel o vermicelli), 1 tomate, 1/2 cebolla, 2 dientes de ajo, 4 tazas de caldo de pollo, sal, pimienta y aceite. Licúa el tomate, cebolla y ajo. Sofríe los fideos en una olla con aceite hasta dorar, añade la mezcla licuada, cocina por 5 minutos y agrega el caldo. Cocina a fuego medio hasta que los fideos estén suaves.",

"22c":"Para hacer pollo a la plancha necesitas: 2 pechugas de pollo, sal, pimienta, ajo en polvo, jugo de 1 limón y aceite. Sazona las pechugas con sal, pimienta, ajo en polvo y jugo de limón. Calienta una sartén con un poco de aceite y cocina las pechugas a fuego medio por 6-8 minutos de cada lado, hasta que estén bien cocidas. Sirve con ensalada o arroz.",

"23c":"Para hacer picadillo necesitas: 500g de carne molida, 2 papas en cubos pequeños, 1 zanahoria picada, 1 cebolla, 2 dientes de ajo, 1 tomate, 1 taza de caldo de res, sal, pimienta, comino y aceite. Sofríe la cebolla y ajo, añade la carne, las papas y zanahorias, cocina por 5 minutos. Agrega el tomate picado, el caldo y condimentos, y cocina a fuego lento hasta que las papas estén tiernas.",

"24c":"Para hacer fajitas de res necesitas: 500g de carne de res en tiras (sirloin o arrachera), 1 pimiento rojo, 1 pimiento verde, 1 cebolla, sal, pimienta, comino, jugo de limón y aceite. Marina la carne con sal, pimienta, comino y jugo de limón. Saltea en una sartén con aceite a fuego alto, añade los pimientos y cebolla en tiras. Cocina hasta que las verduras estén tiernas. Sirve con tortillas de maíz o harina.",

"25c": "Para hacer locro de papa necesitas: 1 kg de papas peladas y cortadas en cubos, 1 cebolla picada, 1 diente de ajo, 1 taza de queso fresco en cubos, 1 taza de leche, 2 tazas de caldo de pollo, 1/4 taza de maní molido, achiote, sal, pimienta y aceite. Sofríe la cebolla, ajo y achiote, añade las papas y el caldo, cocina hasta que las papas estén tiernas. Agrega el maní y la leche, cocina por 5 minutos más y añade el queso antes de servir.",

"26c":"Para hacer ensalada rusa necesitas: 2 papas, 2 zanahorias, 1 taza de arvejas, 1 taza de mayonesa, 1/2 taza de crema de leche, sal y pimienta. Cocina las papas y zanahorias en cubos en agua con sal hasta que estén suaves. Mezcla con las arvejas, mayonesa, crema, sal y pimienta. Refrigera antes de servir.",

"27c":"Para hacer arepas necesitas: 2 tazas de harina de maíz precocida, 2 tazas de agua, 1/2 taza de queso rallado (opcional), 1/2 cucharadita de sal. Mezcla la harina con agua y sal hasta obtener una masa suave. Forma bolas y aplánalas. Cocina en una sartén caliente con un poco de aceite por ambos lados hasta que estén doradas. Puedes rellenarlas con queso, pollo o carne.",

"28c":"Para hacer tacos al pastor necesitas: 500g de carne de cerdo en tiras, 2 cucharadas de achiote, 1/4 taza de jugo de piña, 1/4 taza de vinagre, 1 diente de ajo, 1 cebolla, 1 taza de piña en cubos, tortillas de maíz, sal, pimienta y aceite. Marina la carne con achiote, jugo de piña, vinagre y especias por 1 hora. Cocina en una sartén caliente con aceite, añade piña y cebolla picada. Sirve en tortillas con cilantro y limón.",

// Mensaje para recetas no especificadas
"default": "Lo siento, no conozco esa receta. ¿Te interesa alguna otra receta de pastelería o comida corriente?",
};

// Función para enviar mensaje
function sendMessage() {
    // Obtenemos el valor del input de usuario
    let userInput = document.getElementById("userInput");
    let message = userInput.value.trim().toLowerCase(); // Convertimos a minúsculas para evitar diferencias

    if (message) {
        // Añadimos el mensaje del usuario a la interfaz
        addMessage(message, "user");
        userInput.value = ""; // Limpiamos la entrada de texto

        // Simulamos una respuesta del bot después de 500ms
        setTimeout(() => addBotResponse(message), 500);
    }
}

// Función para añadir mensaje a la interfaz
function addMessage(text, sender) {
    let messagesDiv = document.getElementById("messages");
    let messageDiv = document.createElement("div");

    // Asignamos la clase correspondiente al mensaje (usuario o bot)
    messageDiv.className = "message " + sender;
    messageDiv.textContent = text;

    // Añadimos el mensaje al contenedor de mensajes
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplazarse al final del contenedor
}

// Función para responder según el diccionario
function addBotResponse(userMessage) {
    // Buscamos la respuesta en el diccionario
    let response = respuestas[userMessage] || "Lo siento, no entiendo ese mensaje, seleccione una opcion valida (si quieres ver las ocpiones puedes escribir '0').";

    // Añadimos el mensaje del bot a la interfaz
    addMessage(response, "bot");
}