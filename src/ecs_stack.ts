import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyEcsConstruct } from 'aymanzahranpackage'

export class EcsStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new MyEcsConstruct(this, 'MyCluster', {
      numberOfAzs: 3,
      dockerfileAsset: "./dockerfiles/MyImage"
    });
  }
}