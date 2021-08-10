const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/ProjectController')
//"get" request for router - getting something
//given request, get response from server
router.get('/', (req, res) =>	{
		const data = req.context
		res.render('landing', data)
		
		//JSON
		//landing.json has page...
		//global.json has global...
		//sending back "hello"

		
	}
)

router.get('/project', (req, res) => {
		const data = req.context
		const projectCtr = new ProjectController()
		projectCtr.get()
		.then(projects => {
			data['projects'] = projects
			res.render('project', data)
		})
		.catch(err => {
			res.send('Oops! '+err.message)
		})
	}
)

router.get('/experience', (req, res) => {
		const data = req.context
		res.render('experience', data)
		
	}
)

router.get('/contact', (req, res) => {
		const data = req.context
		res.render('contact', data)
	}
)


module.exports = router
