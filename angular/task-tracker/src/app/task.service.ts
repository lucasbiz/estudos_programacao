import { Injectable } from '@angular/core'; // Importa o decorador Injectable do Angular, que permite que a classe seja injetada como um serviço.
import { Task } from './task.model'; // Importa a interface ou classe Task do arquivo task.model.ts.

@Injectable({
  providedIn: 'root' // Declara que o serviço será fornecido na raiz do aplicativo, tornando-o disponível em toda a aplicação.
})
export class TaskService { // Declaração da classe TaskService, que será usada para gerenciar tarefas.

  private tasks: Task[] = [ // Declara um array privado de tarefas do tipo Task e inicializa com duas tarefas.
    {id: 1, name: 'Learn Angular', completed: false}, // Primeira tarefa com id 1, nome 'Learn Angular' e não concluída.
    {id: 2, name: 'Build a project', completed: false}, // Segunda tarefa com id 2, nome 'Build a project' e não concluída.
  ];

  getTasks(){ // Método para obter todas as tarefas.
    return this.tasks; // Retorna o array de tarefas.
  }

  addTask(task: Task) { // Método para adicionar uma nova tarefa.
    this.tasks.push(task); // Adiciona a nova tarefa ao array de tarefas.
  }

  deleteTask (id: number) { // Método para deletar uma tarefa pelo id.
    this.tasks = this.tasks.filter((task) => task.id !== id); // Filtra o array de tarefas, removendo a tarefa com o id especificado.
  }

  toggleTaskCompletion (id: number) { // Método para alternar o estado de conclusão de uma tarefa pelo id.
    const task = this.tasks.find((task) => task.id === id); // Encontra a tarefa com o id especificado.
    if (task) { // Se a tarefa for encontrada,
      task.completed = !task.completed; // Alterna o estado de conclusão da tarefa.
    }
  }
}
