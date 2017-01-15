export const todo = {
    template: require('./todo.html'),
    controller() {

        // New todos get populated here
        this.newTodo = null;

        // The list of todos
        this.todos = [
            {
                description: 'Buy groceries',
                complete: false
            },
            {
                description: 'Clean house',
                complete: false
            },
            {
                description: 'Feed the dog',
                complete: false
            }
        ];

        // method to complete todo
        this.complete = function(index) {
            this.todos[index].complete = true
        }

        // method to add todo
        this.add = function() {
            var newTodo = {
                description: this.newTodo,
                complete: false
            }
            this.todos.push(newTodo);
            this.newTodo = '';
        }

        // method to delete todo
        this.delete = function(index) {
            this.todos.splice(index, 1);
        }

        // method to handle enter key
        this.handleEnterKey = function(e) {
            if (e.which && e.which === 13 && this.newTodo !== '') {
                this.add();
            }
        }
    }
};
