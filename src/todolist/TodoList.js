import React, { useState } from 'react';
import './TodoList.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);

  // Drag and drop functionality
  const reorder = (listData, startIndex, endIndex) => {
    const [removed] = listData.splice(startIndex, 1);
    listData.splice(endIndex, 0, removed);
    return listData;
  };

  const onDragEnd = (listData) => {
    if (!listData.destination) {
      return;
    }

    const items = reorder(
      this.state.item,
      listData.source.index,
      listData.destination.index
    );

    setlistData(items);
  };

  // Todo list methods
  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      setActivity('');
      return updatedList;
    });
  }

  function removeTask(index) {
    const updatedListData = listData.filter((ele, id) => index !== id);
    setlistData(updatedListData);
  }

  return (
    <div className='container'>
      <div className='header'>TODO LIST</div>
      <input 
        type='text'
        placeholder='Add Activity'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className='button1' onClick={addActivity}>Add</button>
      <p className='List-heading'>Your Todays Task are:</p>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided,snapshot) => (
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef} 
              
            >
              {listData.map((data, index) => (
                <Draggable key={index} draggableId={data.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='listData'
                      
                    >
                      {data.content}
                      <div className='btn-position'>
                        <button className='btn-remove'
                          onClick={() => removeTask(index)} 
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Todolist;
