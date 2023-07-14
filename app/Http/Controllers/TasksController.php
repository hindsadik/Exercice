<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Tache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class TasksController extends Controller
{
    public function index()
    {
        $tasks = Tache::all();
        return Inertia::render('Tasks/index', ['tasks' => $tasks]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:4|max:100',
            'description' => 'required|min:10',
        ]);

        $task = new Tache();
        $task->name = $request['name'];
        $task->description = $request['description'];
        $task->status = 'start';
        $task->save();

        if ($task->id) {
            Mail::to('ifiag@gmail.com')->send(new ContactMail('hindsadik@gmail.com', 'La tâche a été correctement terminée.', 'Fin'));
        }
        
        return to_route('task.index');
    }

    public function create()
    {
        $statusTags = ['start', 'in progress', 'finished'];
        return Inertia::render('Tasks/Create', ['statusTags' => $statusTags]);
    }

    public function edit($id)
    {
        $task = Tache::findOrFail($id);
        return Inertia::render('Tasks/Edit', [
            'task' => $task
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|min:4|max:100',
            'description' => 'required|min:10',
            'status' => 'required'
        ]);
        $tache = Tache::findorFail($id);
        $tache->update($request->all());
        return to_route('task.index');

        if ($tache->finished==1){
            Mail::to('hindsadikchorouk@gmail.com')->send(new ContactMail('hindsadik@gmail.com' , 'la tache bien terminer ' , 'Fin'));
        }
    }

    public function destroy($id)
    {
        $tache = Tache::findorFail($id);
        $tache->delete();
        return to_route('task.index');
    }
}
