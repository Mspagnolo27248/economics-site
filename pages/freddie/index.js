import React, { Fragment } from 'react'
import classes from './freddie.module.css'


export default function BlogPage() {
  return (

    <Fragment>
        <div className={classes.cardList}>
        <div className={classes.cardBlog}>
        <h2 className={classes.blogTitle}>Todays blog Post</h2>
        <p className={classes.blogDate}>Monday, August 10, 2020</p>
        <p className={classes.blogSummary}>impMollit excepteur laborum officia tempor qui non ut consequat minim pariatur occaecat nulla exercitation. Excepteur est nulla ad aute cillum adipisicing ea duis deserunt voluptate.
        Amet est quis veniam dolor occaecat. Veniam pariatur cillum velit 
        veniam.</p>
        </div>   

        <div className={classes.cardBlog}>
        <h2 className={classes.blogTitle}>Todays blog Post</h2>
        <p className={classes.blogDate}>Monday, August 10, 2020</p>
        <p className={classes.blogSummary}>impMollit excepteur laborum officia tempor qui non ut consequat minim pariatur occaecat nulla exercitation. Excepteur est nulla ad aute cillum adipisicing ea duis deserunt voluptate.
        Amet est quis veniam dolor occaecat. Veniam pariatur cillum velit 
        veniam.</p>
        </div>   

        <div className={classes.cardBlog}>
        <h2 className={classes.blogTitle}>Todays blog Post</h2>
        <p className={classes.blogDate}>Monday, August 10, 2020</p>
        <p className={classes.blogSummary}>impMollit excepteur laborum officia tempor qui non ut consequat minim pariatur occaecat nulla exercitation. Excepteur est nulla ad aute cillum adipisicing ea duis deserunt voluptate.
        Amet est quis veniam dolor occaecat. Veniam pariatur cillum velit 
        veniam.</p>
        </div>   

        <div className={classes.cardBlog}>
        <h2 className={classes.blogTitle}>Todays blog Post</h2>
        <div>
          
        </div>
        <img className={classes.blogImg} src='https://images.unsplash.com/reserve/NV0eHnNkQDHA21GC3BAJ_Paris%20Louvr.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
        <p className={classes.blogDate}>Monday, August 10, 2020</p>

        <p className={classes.blogSummary}>impMollit excepteur laborum officia tempor qui non ut consequat minim pariatur occaecat nulla exercitation. Excepteur est nulla ad aute cillum adipisicing ea duis deserunt voluptate.
        Amet est quis veniam dolor occaecat. Veniam pariatur cillum velit 
        veniam.</p>
        </div>   
        </div>

    </Fragment>

  )
}
