import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Инкремент', // Изменено название приложения
      theme: ThemeData(
        colorSchemeSeed: Colors.green, // Изменена тема на зеленую
        useMaterial3: true,
        brightness: Brightness.light,
      ),
      darkTheme: ThemeData(
        colorSchemeSeed: Colors.green, // Изменена темная тема на зеленую
        useMaterial3: true,
        brightness: Brightness.dark,
      ),
      home: const MyHomePage(title: 'Инкремент'), // Изменен заголовок
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      if (_counter > 0) _counter--; // Уменьшаем счетчик, если он больше 0
    });
  }

  void _resetCounter() {
    setState(() {
      _counter = 0; // Сбрасываем счетчик
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title), // Заголовок приложения
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Значение инкремента:', // Изменена надпись
              style: TextStyle(fontSize: 18),
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 20), // Отступ между элементами
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: const Icon(Icons.remove), // Кнопка с иконкой "-"
                  onPressed: _decrementCounter,
                ),
                const SizedBox(width: 20), // Пространство между кнопками
                IconButton(
                  icon: const Icon(Icons.add), // Кнопка с иконкой "+"
                  onPressed: _incrementCounter,
                ),
              ],
            ),
            const SizedBox(height: 20), // Отступ перед кнопкой "Сбросить"
            TextButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.grey), // Серый текст
                overlayColor: MaterialStateProperty.all<Color>(Colors.transparent), // Прозрачная кнопка
              ),
              onPressed: _resetCounter,
              child: const Text('Сбросить'), // Текстовая кнопка "Сбросить"
            ),
          ],
        ),
      ),
    );
  }
}