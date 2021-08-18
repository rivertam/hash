import { genId } from "../../../util";
import { DbUser } from "../../../types/dbTypes";
import {
  MutationCreateUserArgs,
  Resolver,
  Visibility,
} from "../../apiTypes.gen";
import { GraphQLContext } from "../../context";

export const createUser: Resolver<
  Promise<DbUser>,
  {},
  GraphQLContext,
  MutationCreateUserArgs
> = async (_, { email, shortname }, { dataSources }) => {
  const id = genId();
  // TODO: should check for uniqueness of email

  const entity = await dataSources.db.createEntity({
    accountId: id,
    entityVersionId: id,
    createdById: id, // Users "create" themselves
    type: "User",
    properties: { email, shortname },
    versioned: false, // @todo: should user's be versioned?
  });

  const user: DbUser = {
    ...entity,
    id: entity.entityVersionId,
    accountId: entity.accountId,
    type: "User",
    visibility: Visibility.Public, // TODO
  };

  return user;
};
