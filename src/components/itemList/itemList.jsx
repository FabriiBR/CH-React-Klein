import React from 'react';
import { useParams } from "react-router"
import { useEffect, useState } from 'react/cjs/react.development'
import { Item } from '../item/item';

import {getFirestore} from '../../firebase/firebase'

export const ItemList = () => {

  const {category} = useParams()

  const [courses, setCourses] = useState([])
  const [itemExists, setItemExists] = useState(false)
    
  useEffect (() => {
    const getCourses = () => {
      const db = getFirestore();
      let itemCollection = db.collection('courses')
      if(category){ itemCollection = itemCollection.where('category', '==', category) }
      itemCollection.get().then(querySnapshot => {
        const itemsFiltered = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        querySnapshot !==0 && setCourses((itemsFiltered), setItemExists(true))
      })
    }
    getCourses();
  }, [category])

  return (
    <>
      <div className="container flex-column border-0 mt-3 mb-3">
        <h2>Cursos </h2>
        <div className="row">
          {itemExists ? (courses.length > 0 ? (courses.map ((course) => <Item course={course} />)
              ) : (
                  <p>No tenemos productos para mostrar</p>)
              ) : (
                  <p>Cargando...</p>
              )}
        </div>
      </div>
    </>
  )
}