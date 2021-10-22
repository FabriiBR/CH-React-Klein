import { useParams } from "react-router"
import { ItemDetail } from '../itemDetail/itemDetail'
import { useEffect, useState } from "react/cjs/react.development"
import { getFirestore } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
    const {courseId} = useParams()

    const [course, setCourse] = useState ({})

    useEffect (() => {
        const db = getFirestore()
        const itemCollection = db.collection('courses')
        const myCourse = itemCollection.doc(courseId)
        
        myCourse.get().then((doc) => {
            const data = {id: doc.id, ...doc.data(),}
            setCourse( data )
        })

        
    }, [ courseId ])

    return (
        <div className="container mt-3 mb-3 pb-3">
            <ItemDetail course={course} />
        </div>
    )
}