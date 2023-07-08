<?php

namespace App\Http\Controllers;

use App\Models\Tache;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TasksController extends Controller
{
    public function index(){
        $taches = Tache::all();
        return Inertia::render('Taches/Index',['taches'=>$taches]);
    }
    public function store(Request $request){
        $request->validate([
            'name'=>'required|min:4|max:100',
            'description'=>'required|min:10',
            'status'=>'required'
        ]);
        Tache::create($request -> all());

        return redirect()->route("taches.index");
    }
    public function edit($id){
        $data = [
            'tache' => Tache::findOrFail($id),
            'statusTags' => ['start', 'in progress', 'finished']
        ];
        $tache = Tache::findOrFail($id);
        $statusTags = ['start', 'in progress', 'finished'];

        return Inertia::render('Taches/Edit',[
            'tache'=>$tache,
            'statusTags'=>$statusTags
        ]);
    }
    public function update(Request $request , $id){
        $request->validate([
            'name'=>'required|min:4|max:100',
            'description'=>'required|min:10',
            'status'=>'required'
        ]);
        $tache = Tache::findorFail($id);
        $tache->update($request->all());
        return redirect()->route('taches.index');
    }
    public function destroy($id){
        $tache = Tache::findorFail($id);
        $tache->delete();
        return redirect()->route('taches.index');
    }
}
