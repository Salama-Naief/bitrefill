import React from 'react'
import Layout from '../../components/layout/Layout'

function Collection() {
  return (
    <Layout title={"collection"}>
        <div>Collection</div>
    </Layout>
  )
}

export async function getServerSideProps({locale}) {
  
  try{
   
        return {
          props: {
            ...(await serverSideTranslations(locale, ['common']))
          }
        }
  }catch(err){
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common']))
      }
  }  }
 
}
export default Collection