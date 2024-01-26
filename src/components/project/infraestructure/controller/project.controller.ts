import { inject, injectable } from 'inversify';
import { Request, Response } from "express";
import { ProjectService } from '../service/project.service';
import { EditProjectParams, IProject } from '../../domain/interface';
import { StatusCodes } from 'http-status-codes';

@injectable()
export class ProjectController {

    static NAME: string = 'ProjectController';
    
    constructor(@inject(ProjectService.NAME) private projectService: ProjectService) { }

    public getAllProjects = async (req: Request, res: Response) => {
        const projects = await this.projectService.getProjectsByUser(req.user);
        return res.json({data: projects})
    }

    public addNewProject = async (req: Request, res: Response) => {
        const data = req.body as IProject;
        data.owner = req.user._id;
        const result = await this.projectService.addProject(data);
        return res.status(StatusCodes.OK).json({project: result })
    }

    public getProject = async (req: Request, res: Response) => {
        const project = await this.projectService.getProjectById(req.params.id, req.user._id);
        return res.status(StatusCodes.OK).json({project});
    }

    public editProject = async (req: Request, res: Response) => {
        const result = await this.projectService.updateProjectById(req.params.id, req.user._id, req.body as EditProjectParams);
        return res.status(StatusCodes.OK).json({ msg: 'Updated succesfully', data: result});
    }

    public deleteProject = async (req: Request, res: Response) => {

    }

    public addCollaborator = async (req: Request, res: Response) => {

    }

    public deleteCollaborator = async (req: Request, res: Response) => {

    }

    public getTasks = async (req: Request, res: Response) => {

    }
}