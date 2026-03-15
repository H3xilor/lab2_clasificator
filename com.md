npx create-expo-app appname 
     // --template
     //           default
     //           blank
     //           blank-typescript
     //           tabs
     // --name "AppName"

expo start --tunnel




UI Components
 React Native              Web                               Description (RO)                         
 `<View>`                  `<div>`                           Un container care suportă layout cu flexbox, stilizare
 `<Text>`                  `<p>`                             Afișează și stilizează text
 `<Image>`                 `<img>`                           Afișează imagini locale sau de pe internet
 `<ScrollView>`            `<div>` (scroll)                  Container scrollabil care poate conține mai multe componente și vizualizări
 `<TextInput>`             `<input type="text">`             Permite utilizatorului să introducă text
 `<Pressable>`             `<button>` / `<div>`              Componentă interactivă care detectează apăsări și gesturi tactile
 `<FlatList>`              `<ul>` / `<div>`                  Liste performante care afișează elemente scrollabile, optimizate pentru multe iteme
 `<SectionList>`           `<ul>` / `<div>`                  Liste împărțite pe secțiuni, pentru organizarea datelor pe grupuri
 `<SafeAreaView>`          `<div>`                           Asigură că conținutul nu intră în zonele sensibile (notch, bara de status)
 `<ActivityIndicator>`     `<div>` / `<span>`                Afișează un indicator de încărcare (spinner)
 `<Modal>`                 `<div>` / `<dialog>`              Afișează o fereastră modală deasupra altui conținut
 `<KeyboardAvoidingView>`  `<div>`                           Ajustează automat layout-ul când tastatura apare, pentru a nu acoperi input-urile
 `<Switch>`                `<input type="checkbox">`         Un buton toggle (pornit / oprit)
 `<Slider>`                `<input type="range">`            Permite selectarea unei valori dintr-un interval cu slider
 `<Picker>`                `<select>`                        Selectarea unui element dintr-o listă derulantă
 `<ImageBackground>`       `<div style="background-image">`  Permite afișarea unei imagini ca fundal pentru alte componente
 `<TouchableOpacity>`      `<div>` / `<button>`              Similar cu Pressable, cu efect vizual de opacitate la apăsare
 `<TouchableHighlight>`    `<div>` / `<button>`              Similar cu Pressable, cu evidențiere vizuală la apăsare
