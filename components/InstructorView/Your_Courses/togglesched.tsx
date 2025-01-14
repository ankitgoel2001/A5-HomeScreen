import styles from './IOptions.module.scss'
import Link from 'next/link'
import { useState } from 'react';
import { ICourse , IVocab } from 'interfaces'
import { useRouter } from 'next/router';

interface Props {
  collections: ICourse[]
}

const Item = (item: IVocab) => {
  return (
    <div className={styles.item} key={item.value}>
      <h3>{item.value}</h3>
      <h4>{item.translation}</h4>
    </div>
  )
}



export default Item
