<?php

namespace App\Http\Controllers;

use App\Models\Tache;
use Illuminate\Http\Request;
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
    }
    public function destroy($id)
    {
        $tache = Tache::findorFail($id);
        $tache->delete();
        return to_route('task.index');
    }
}
